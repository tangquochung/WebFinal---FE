import './Item.scss'
function Item(props) {
    return(
        <div className="shopping">
                    <div className='img-box'>
                        <img className='img' src={props.img} alt='img item' />
                    </div>
                    <div className='content'>
                        <p className='title'>{props.title}</p>
                        <p className='desc'>{props.desc}</p>
                        <p className='categories'>{props.categories}</p>
                        <img className='content-img' src={props.img} alt='img item' />
                        <p className='color'>{props.color}</p>
                        <p className='price'>{props.price}</p>
                        
                        
                        <button >Add to cart</button>
                        <button>View detail</button>
                    </div>
        </div>
    )
}

export default Item
//bỏ img để bỏ link