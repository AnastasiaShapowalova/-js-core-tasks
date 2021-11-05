import { FaStar } from 'react-icons/fa';


const Rating = (props) => {
    const {maxStar, selectedStar} = props
   
    return(
        <div className='rating'>  
         { [...Array(+maxStar)].map((item, i) =>{
            let ratingValue = i + 1;
            return( 
                <label>
                    <input style={ {display:'none'} } type='radio' name='rating' value={ratingValue}/>
                    <FaStar color={(ratingValue <= +selectedStar) ? 'dark' : 'grey'} />
                </label>)
         }) }    
        </div>
    )
}

export default Rating