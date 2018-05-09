import TabTable from './TabTable';

if (!sessionStorage.getItem('re')) {
    window.document.location.reload()
    sessionStorage.setItem('re', true)
}


export default TabTable;
