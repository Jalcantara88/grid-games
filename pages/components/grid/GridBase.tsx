// import { createBlankGrid } from "@/pages/scripts/grid";
import React, { ReactElement, FC } from "react"

type Grid = {
    rows: number,
    column: number,
    style: {},
    gameData: any,
}

export const GridBase = (
    {
        rows,
        column,
        style,
        gameData,
    }: Grid
):ReactElement => {
    const test = "";

    // const {grid, table}: any = createBlankGrid(gameData)

    
    return (
        <div
            className="flex "
        >
            <h1>{gameData.name}</h1>

            <table>

            </table>

            <div></div>
        </div>
    )
}