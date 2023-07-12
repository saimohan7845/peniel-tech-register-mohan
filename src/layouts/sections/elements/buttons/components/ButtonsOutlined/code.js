const buttonsOutlinedCode = `import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsOutlined() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKButton variant="outlined" color="primary">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="secondary">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="info">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="success">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="warning">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="error">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="light">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="dark">
              penieltech
            </MKButton>
            <MKButton variant="outlined" color="white">
              penieltech
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsOutlined;`;

export default buttonsOutlinedCode;
