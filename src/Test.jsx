import React from 'react'
import TabMenu from './ReusableComponents/tabMenu/TabMenu'
import BackBtn from './ReusableComponents/backBtn/BackBtn'
import PdfViewer from './ReusableComponents/PdfViewer'
const tabstest = [
        { id: 1, label: 'კვარტალი1', text: '123textextextextetxtext as1' },
        { id: 2, label: 'კვარტალი2', text: '123textextextextetxtext as2' },
        { id: 3, label: 'კვარტალი3', text: '123textextextextetxtext as3' },
        { id: 4, label: 'კვარტალი4', text: '123textextextextetxtext as4' },
        { id: 5, label: 'კვარტალი1', text: '123textextextextetxtext as1' },
        { id: 6, label: 'კვარტალი2', text: '123textextextextetxtext as2' },
        { id: 7, label: 'კვარტალი3', text: '123textextextextetxtext as3' },
        { id: 8, label: 'კვარტალი4', text: '123textextextextetxtext as4' }
    ]
const Test = () => {

    return (
        <>
        <TabMenu tabs={tabstest} />
        <BackBtn />
        {/* <PdfViewer  /> */}
        </>
    )
}

export default Test