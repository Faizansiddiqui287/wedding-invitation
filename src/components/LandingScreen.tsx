import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import weddingCard from '../assets/weddingCard.png'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
interface TimeLeft {
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }
const LandingScreen = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const targetDate = '2024-12-22T00:00:00';
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();
  
      let timeLeft: TimeLeft = {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
  
      if (difference > 0) {
        const months = (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth();
        const remainingDays = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        timeLeft = {
          months: months,
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, [targetDate]);

    const openMap = () => {
        window.open('https://maps.app.goo.gl/rxM9FYj4yVCo5MqC7', '_blank', 'noopener,noreferrer');
      };

    return (
        <Box style={styles.backgroundStyle}>
            <Typography sx={styles.topText}>
                In the name of Allah, the most beneficient and merciful
            </Typography>
            <Typography sx={styles.gratitudeText}>Mrs. Afsana & Mr. Abdul Shamim</Typography>
            <Typography sx={{...styles.gratitudeText,fontSize: { xs: '12px', sm: '16px', md: '24px', lg: '28px' },}}>REQUEST THE HONOUR OF YOUR PRESENCE AT THE RECEPTION CEREMONY</Typography>
            <Typography sx={{...styles.gratitudeText,fontSize: { xs: '12px', sm: '16px', md: '24px', lg: '28px' },marginTop:0}}>of</Typography>


            <motion.h1
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                style={{ fontFamily: "Great Vibes", color: "#025443", textAlign: "center",marginTop: isDesktop ? 70 : 35,  }}
            >
                Faizan Siddiqui
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                style={{ fontFamily: "Great Vibes", color: "#025443", textAlign: "center" }}
            >
                &
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                style={{ fontFamily: "Great Vibes", color: "#025443", textAlign: "center" }}
            >
                Adeeba Fatima
            </motion.h1>
            <Typography sx={styles.dateInfo}>22 Dec, 2024</Typography>
            <motion.h3
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: "Merienda", color: "#025443", textAlign: "center", marginTop: -2,fontSize:12 }}
            >
                <span >{timeLeft.months} months </span>
                <span >{timeLeft.days} days </span>
                <span >{timeLeft.hours} hours </span>
                <span >{timeLeft.minutes} minutes </span>
                <span >{timeLeft.seconds} seconds</span>
            </motion.h3>
            <Typography sx={styles.venuInfo}>Venue :-</Typography>
            <Typography sx={{ ...styles.venuInfo, fontSize: { xs: '11px', sm: '15px', md: '22px', lg: '28px' } }}>Shalimar Garden, Sanigawan Road, Kanpur Nagar, UP, 208021</Typography>
            <Typography
                variant="body1"
                sx={{...styles.venuInfo,textDecoration: 'underline'}}
                onClick={openMap}
            >
                Click here to view the location on the map
            </Typography>

        </Box>
    )
}

const styles = {
    backgroundStyle: {
        backgroundImage: `url(${weddingCard})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
    },
    '@media (max-width: 768px)': {
        backgroundStyle: {
            backgroundSize: 'contain',
        },
    },
    topText: {
        marginTop: { xs: 20, sm: 2, md: 2 },
        color: "#025443",
        fontFamily: "Merienda",
        fontSize: { xs: '12px', sm: '16px', md: '24px', lg: '28px' },
        textAlign: 'center',
        padding: { xs: '0 10px', sm: '0 20px' },
    },
    gratitudeText:{
        marginTop: { xs: 2, sm: 2, md: 2 },
        color: "#025443",
        fontFamily: "Merienda",
        fontSize: { xs: '16px', sm: '20px', md: '28px', lg: '32px' },
        textAlign: 'center',
        padding: { xs: '0 10px', sm: '0 20px' },
    },
    dateInfo:{
        marginTop: { xs: 4, sm: 4, md: 4 },
        color: "#025443",
        fontFamily: "Merienda",
        fontSize: { xs: '16px', sm: '20px', md: '28px', lg: '32px' },
        textAlign: 'center',
        fontWeight:"bolder",
    },
    venuInfo:{
        // marginTop: { xs: 4, sm: 4, md: 4 },
        color: "#025443",
        fontFamily: "Merienda",
        fontSize: { xs: '16px', sm: '20px', md: '28px', lg: '32px' },
        textAlign: 'center',
        fontWeight:"bolder",
    }
}

export default LandingScreen