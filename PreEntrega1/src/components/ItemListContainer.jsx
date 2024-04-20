const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container-fluid bg-warning py-3">
            <div className="row">
                <div className="col text-center">
                    <h4 style={{color:"gray-dark", fontWeight:"bold"}}>{mensaje}</h4>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer;