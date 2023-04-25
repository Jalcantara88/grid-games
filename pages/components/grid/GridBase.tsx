import React, { ReactElement, FC } from "react"

type Grid = {
    rows: number,
    column: number,
    style: {},
}

export const GridBase = (
    {
        rows,
        column,
        style,
    }: Grid
):ReactElement => {
    const test = "";
    
    return (
        <div
            className="flex flex-wrap"
        >
            <h1></h1>
        </div>
    )
}