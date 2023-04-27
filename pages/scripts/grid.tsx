import { ReactElement } from "react";

export const createGridGame = (gameData: any) => {

    const grid = blankGrid(gameData)

    const table = makeTable(gameData.rows, gameData.columns)

    return {
        grid,
        table,
    }
}

export const makeTable:any = (rows: number,columns: number) => {

    const table: any = <table></table>

    for(let r = 0; r < rows; r++) {

        table.appendChild(<tr></tr>)

        for(let c = 0; c < columns; c++) {

            const thisRow = table.children.item(c)

            thisRow.appendChild(<td></td>)

        }
    }
    
}

export const blankGrid:any = (gameData: any) => {

    const grid: any[] = []

    for(let r = 0; r < gameData.rows; r++) {

        grid[r] = []

        for(let c = 0; c < gameData.columns; c++) {

            grid[r][c] = 0

        }
    }

    return grid

}

const iterateGrid = (rows: number, cols: number, perRow: Function, perCol: Function) => {

    let returnObj

    for(let r = 0; r < rows; r++) {


        for(let c = 0; c < cols; c++) {


        }
    }

}

const perRow = (row: number) => {

}

const perCol = (row: number, col: number) => {

}