const buttonsIconLeftCode = `import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsIconLeft() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <MKButton color="info" size="small">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              penieltech
            </MKButton>
            <MKButton color="info">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              penieltech
            </MKButton>
            <MKButton color="info" size="large">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              penieltech
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsIconLeft;`;

export default buttonsIconLeftCode;
