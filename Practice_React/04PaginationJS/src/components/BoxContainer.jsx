import React from 'react'

const BoxContainer = () => {

    const boxHeight = 30;
    const pageHeight = 600;
    const totalBoxes = 100;

    const boxesPerPage = pageHeight / boxHeight;
    const totalPages = totalBoxes / boxesPerPage;

    const getPageRanges = () => {
        const ranges= [];
        for(let page=1; page<totalPages; page++){
            const startBox = (page*boxesPerPage-boxesPerPage)+1;
            const endBox = page*boxesPerPage;
            ranges.push({page, startBox, endBox});
        }
        return ranges;
    }    

    const pageRanges = getPageRanges();

    return (
        <>
            <div className='flex flex-col'>
                <h1>Box Container</h1>
                <p>Each box Height : {boxHeight}</p>
                <p>Page Height : {pageHeight}</p>
                <p>Total boxes : {totalBoxes}</p>
                <p>boxesPerPage : {boxesPerPage}</p>
                <p>Total pages required : {totalPages}</p>
                <div>
                    {pageRanges.map((range)=>(
                        <p>
                            Page {range.page}: {range.startBox} - {range.endBox};
                        </p>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default BoxContainer
