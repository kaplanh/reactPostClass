import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import data from "../../data"

const Cardd = () => {
    return (
        <>
            <Typography variant="h5" m={2} color={"error.dark"} align="center">Card and Grid</Typography>
            <Grid container rowSpacing={2} columnSpacing={4} justifyContent={'center'}>
                {data.map(({ id, name, text, img }) => (
                    <Grid item key={id} xs={12} sm={6} md={4} >
                        {" "}
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    
                                    image={img}
                                    alt={name}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                       {name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Cardd;
