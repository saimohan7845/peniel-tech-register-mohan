const typographyCode = `import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Typography() {
  return (
    <MKBox component="section" py={8}>
      <Container>
        <MKTypography variant="h2" mb={6}>
          Typography - Peniel Technology LLc
        </MKTypography>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 1
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h1">Peniel Technology LLC</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 2
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h2">Peniel Technology LLC</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 3
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h3">Peniel Technology LLC</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 4
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h4">Peniel Technology LLC</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 5
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h5">Peniel Technology LLC</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 6
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h6">Peniel Technology LLC</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Lead Text
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="body1" color="text">
              Peniel Technology LLC has been conceptualized to serve the accounting needs of 
              a diverse range of businesses and practicing professionals as well. Along with 
              the Software we provide you with a one-stop solution from a compliance perspective 
              and poise to handle your accounting process with absolute ease and ample time to 
              emphasize on other aspects of your business.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Paragraph
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="body2" color="text">
              Peniel Technology LLC has been conceptualized to serve the accounting needs of 
              a diverse range of businesses and practicing professionals as well. Along with 
              the Software we provide you with a one-stop solution from a compliance perspective 
              and poise to handle your accounting process with absolute ease and ample time to 
              emphasize on other aspects of your business.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Small
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <MKTypography variant="button" color="text">
              Peniel Technology LLC has been conceptualized to serve the accounting needs of 
              a diverse range of businesses and practicing professionals as well. Along with 
              the Software we provide you with a one-stop solution from a compliance perspective 
              and poise to handle your accounting process with absolute ease and ample time to 
              emphasize on other aspects of your business.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Tiny
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
              Peniel Technology LLC has been conceptualized to serve the accounting needs of 
              a diverse range of businesses and practicing professionals as well. Along with 
              the Software we provide you with a one-stop solution from a compliance perspective 
              and poise to handle your accounting process with absolute ease and ample time to 
              emphasize on other aspects of your business.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Typography;`;

export default typographyCode;
