import React, { useContext } from "react"
import { ResultsContext } from "../hooks/useResults";
import { DetailsList, DetailsListLayoutMode, IColumn, mergeStyleSets } from "office-ui-fabric-react";
import { IResult } from "../../entities/result";

const ResultList = () => {
    const { results } = useContext(ResultsContext);
    const classNames = mergeStyleSets({
        fileIconHeaderIcon: {
            padding: 0,
            fontSize: '16px'
        },
        fileIconCell: {
            textAlign: 'center',
            selectors: {
            '&:before': {
                content: '.',
                display: 'inline-block',
                verticalAlign: 'middle',
                height: '100%',
                width: '0px'
            }
            }
        },
        fileIconImg: {
            verticalAlign: 'middle',
            maxHeight: '16px',
            maxWidth: '16px'
        },
        controlWrapper: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        exampleToggle: {
            display: 'inline-block',
            marginBottom: '10px',
            marginRight: '30px'
        },
        selectionDetails: {
            marginBottom: '20px'
        }
        });
        
    const columns: IColumn[] = [
        {
          key: 'column1',
          name: 'Date',
          className: classNames.fileIconCell,
          iconClassName: classNames.fileIconHeaderIcon,
          iconName: 'Calendar',
          fieldName: 'Date',
          minWidth: 200,
          onRender: (result: IResult) => <span>{result.date.toLocaleDateString()}</span>
        },
        {
          key: 'column2',
          name: 'Amount',
          className: classNames.fileIconCell,
          iconClassName: classNames.fileIconHeaderIcon,
          iconName: 'Weights',
          fieldName: 'name',
          minWidth: 200,
          onRender: (result: IResult) => <span>{result.amount} kg</span>
        },
        {
          key: 'column3',
          name: 'Note',
          className: classNames.fileIconCell,
          iconClassName: classNames.fileIconHeaderIcon,
          iconName: 'EditNote',
          fieldName: 'name',
          minWidth: 200,
          onRender: (result: IResult) => <span>{result.note}</span>
        }
    ]

    return <div>Results: {JSON.stringify(results)}
        <DetailsList
            items={results}
            columns={columns}
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
        />
    </div>
}

export default ResultList