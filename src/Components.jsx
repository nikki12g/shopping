const Components=(props)=>
{
    const {title,image1,image2,image3}=props.gents
    return(
        <div className="gents-container">
            <h2>{title}</h2>
            <div className="img">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            </div>
            </div>
            )
        }
    export default  Components;