import { ReactElement } from "react";

export const createBlankGrid:any = (gameData: any) => {

    const grid: any[] = []

    for(let r = 0; r < gameData.rows; r++) {

        grid[r] = []

        for(let c = 0; c < gameData.columns; c++) {

            grid[r][c] = 0

        }
    }

    return grid

}