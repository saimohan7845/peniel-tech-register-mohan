import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsContained() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKButton color="primary">penieltech</MKButton>
            <MKButton color="secondary">penieltech</MKButton>
            <MKButton color="info">penieltech</MKButton>
            <MKButton color="success">penieltech</MKButton>
            <MKButton color="warning">penieltech</MKButton>
            <MKButton color="error">penieltech</MKButton>
            <MKButton color="light">penieltech</MKButton>
            <MKButton color="dark">penieltech</MKButton>
            <MKButton color="white">penieltech</MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsContained;
