import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './infobox.css'
import OpacityIcon from '@mui/icons-material/Opacity';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({wetherinfo}){
    let image="https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COlD_URL="https://images.unsplash.com/photo-1519937010618-f8c8b7e135b7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIn_URL="https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={wetherinfo.humidity>80?RAIn_URL:(wetherinfo.temp>15?HOT_URL:COlD_URL)}
        
        
        title="green iguana"
      />  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {wetherinfo.city}
            {wetherinfo.humidity>80?<ThunderstormIcon/>:(wetherinfo.temp>15?<SunnyIcon/>:<OpacityIcon/> )}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temparature={wetherinfo.temp}&deg;C</p>
        <p>humidity={wetherinfo.humidity}</p>
        <p>Min temp={wetherinfo.tempMin}&deg;C</p>
        <p>Max temp={wetherinfo.tempMax}&deg;C</p>
        <p>feelslike={wetherinfo.feelsLike}</p>
        <div></div>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
        </div>
    )
}