import { Box, CssBaseline, Divider, Typography }
  from "@mui/material";
import Container from "@mui/material/Container";

const Cont = () => {
  return (
      <Container maxWidth="xl" sx={"border:2px solid red"} fixed>
          <Typography variant="h5" align="center">
              Container
          </Typography>
          {/* <CssBaseline /> */}

          <Container maxWidth="lg" sx={"border:2px solid red"}>
              <Container maxWidth="md" sx={"border:2px solid red"}>
                  <Container maxWidth="xs" sx={"border:2px solid red"}>
                      <Container maxWidth="sm" sx={"border:2px solid red"}>
                          <Typography variant="h5">Mui Breakpoints</Typography>
                          <Divider orientation="horizontal" />
                          <Typography variant="body1">
                              xs=|| sm=600 || md=900 || lg=1200 || xl=1536
                          </Typography>
                          <Typography variant="caption">
                              Container maxWidth ile divin ne hangi ölcüye kadar
                              büyüyecegini belirler default u xl=1536 dir
                              disableGutters props unu kullanirsak sag ve
                              soldaki bosluklar iptal edilir
                          </Typography>
                      </Container>
                  </Container>
              </Container>
          </Container>
      
      </Container>
  );
};

export default Cont;
