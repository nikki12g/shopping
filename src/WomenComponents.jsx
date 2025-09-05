const WomenComponents=(props)=>
{
    const {title,image1,image2,image3} =props.women
    return(
        <div className="women">
            <h1>{title}</h1>
            <div className="img">
                <img src={image1}/>
                <img src={image2}/>
                <img src={image3}/>
                </div>
            </div>
            )
        }
    export default WomenComponents;