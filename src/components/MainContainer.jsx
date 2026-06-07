import Cell from "./UI/Cell.jsx"

export default function MainContainer() {
    return (
        <div className="bento p-6 w-4/5 glass relative">
            <Cell colStart={1}  rowStart={1} col={15} row={4}
                  className="rounded-tl-[60px]" />
            <Cell colStart={16} rowStart={1} col={5}  row={8}
                  className="rounded-tr-[60px] rounded-br-[60px]" />
            <Cell colStart={1}  rowStart={5} col={5}  row={4}
                  className="rounded-bl-[60px]" />
            <Cell colStart={6}  rowStart={5} col={5}  row={2} />
            <Cell colStart={11} rowStart={5} col={5}  row={2} />
            <Cell colStart={6} rowStart={7} col={5}  row={2} />
            <Cell colStart={11} rowStart={7} col={5}  row={2} />
        </div>
    )
}