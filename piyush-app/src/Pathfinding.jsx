import React, {Component} from "react";

import Node from './Node.jsx'
import "./Pathfinding.css"



let row_max_length = 20;
let col_max_length = 40;

let START_NODE_ROW = 9;
let START_NODE_COL = 8;
let FINISH_NODE_ROW = 9;
let FINISH_NODE_COL = 31;

 class Pathfinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      mouseIsPressed: false,
      topMessage: "Dijkstra Algorithm",
      weight: 1,
      changeWeight: false,
      distanceToBeTraveled: 0,
    };
  }

  // Creating grid
  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  // On pressing the mouse down
  handleMouseDown(row, col) {
    if (this.state.topMessage !== "Dijkstra Algorithm") return;

    let newGrid = [];

    if (this.state.changeWeight) {
      newGrid = getNewGridWithWeightToggled(  this.state.grid, row, col, this.state.weight);
    } 
    else {
      newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    }

    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  // On entering the new node element.
  handleMouseEnter(row, col) {
    if (this.state.topMessage !== "Dijkstra Algorithm") return;
    if (!this.state.mouseIsPressed) return;

    let newGrid = [];

    if (this.state.changeWeight) {
      newGrid = getNewGridWithWeightToggled( this.state.grid, row, col, this.state.weight );
    } 
    else {
      newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    }

    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  // When we release the mouse
  handleMouseUp() {
    if (this.state.topMessage !== "Dijkstra Algorithm") return;
    this.setState({ mouseIsPressed: false });
  }
  
  weightChangeHandler = (event) => {
    this.setState({ weight: event.target.value });
  };

    render() { 
        const {
            grid,
             mouseIsPressed,
             topMessage,
             distanceToBeTraveled,
             } = this.state;

        let button_task =(
            <p className="btn" onClick={() => this.visualizeSijkstra()}>
                start Dijkstra Algo
            </p> 
        );
        
        

        return (
        <div className="pathfindingVisualizer">
           <div className="container">
              <p>
                dijkstra's Algorithms { " " }
                <span className="ref"></span> 
                </p>
               { button_task} 
            </div>
            <div className="visualGridContainer">
                <div className="gridBox">
                    <table className="grid" style={{ borderSpacing : "0"}}>
                       <tbody>
                        {
                        grid.map((row,rowIndex) =>{
                           return(
                            <tr key={rowIndex}>
                                {row.map((node,nodeIndex) =>{
                                    const{isStart,isFinish,isWall,isWeight}= node;
                                  return (
                                    <Node
                                     row={rowIndex}
                                     col={nodeIndex}
                                     key={rowIndex + "-" + nodeIndex}
                                     isStart={isStart}
                                     isFinish={isFinish}
                                     isWall={isWall}
                                     isWeight={isWeight}
                                     mouseIsPressed={mouseIsPressed}
                                     onMouseDown={(row, col) =>
                                       this.handleMouseDown(row, col)
                                     }
                                     onMouseEnter={(row, col) =>
                                       this.handleMouseEnter(row, col)
                                     }
                                     onMouseUp={() => this.handleMouseUp()}
                                     ></Node>
                                );
                              })}
                            </tr>
                            );
                           })}
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
      );
    }
};

const getInitialGrid = ()=>{
    const grid = [];
    for(let row=0; row < row_max_length ; row++)
    {
        const currentRow=[];
        for(let col =0 ; col<col_max_length;col++)
        {
            currentRow.push(createNode(col,row));
        }
        grid.push(currentRow);
    }
    return grid;
};


const createNode=(col,row)=>{
 return{
    col,
    row,
    isStart : row===START_NODE_ROW && col === START_NODE_COL,
    isFinish : row === FINISH_NODE_ROW && col===FINISH_NODE_COL,
    distance: Infinity,
    isVisited : false,
    isWall:false,
    isWeight:false,
    PreviousNode: null,
    weight:0,
 };
}   

const getNewGridWithWeightToggled =(grid,row,col,weight) =>{
    const newGrid=[...grid];
    const node=newGrid[row][col];
    const newNode ={
        ...node,
        isweight: !node.isWeight,
        weight : parseInt(weight),
    };
    newGrid[row][col]=newNode;
    return newGrid;
};

const getNewGridWithWallToggled =(grid,row,col) =>
{
    const newGrid=[...grid];
    const node=newGrid[row][col];
    const newNode={
        ...node,
        isWall : !node.isWall,
    };
    newGrid[row][col]=newNode;
    return newGrid;
};
  


 
export default Pathfinding;