const ProductDetail = ({title, src, body}) => {
    return ( 
        <div className="card">
            <img src={src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
     );
}
 
export default ProductDetail;