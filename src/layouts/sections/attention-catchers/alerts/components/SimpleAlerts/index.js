import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";

function SimpleAlerts() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="primary">Penieltech alert!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="secondary">Penieltech alert!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="success">Penieltech alert!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="error">Penieltech alert!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="warning">Penieltech alert!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="info">Penieltech alert!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">Penieltech alert!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="dark">Penieltech alert!</MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SimpleAlerts;
