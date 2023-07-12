import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsGradient() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKButton variant="gradient" color="primary">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="secondary">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="info">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="success">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="warning">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="error">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="light">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="dark">
              penieltech
            </MKButton>
            <MKButton variant="gradient" color="white">
              penieltech
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsGradient;
