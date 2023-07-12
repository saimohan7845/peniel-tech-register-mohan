import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Tooltip from "@mui/material/Tooltip";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/shapes/waves-white.svg";
import Logo1 from "assets/clientimg/clients.jpg";
// import Logo2 from "assets/clientimg/compnay-logo-2.webp";
// import Logo3 from "assets/clientimg/compnay-logo-3.webp";
// import Logo4 from "assets/clientimg/compnay-logo-4.webp";
// import Logo5 from "assets/clientimg/compnay-logo-5.webp";
// import Logo6 from "assets/clientimg/compnay-logo-6.webp";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 7 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white" mb={3}>
              Penieltech CRM for modern enterprises
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              The operating core of your business
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Your enterprise CRM needs to evolve as quickly as your enterprise does. Zoho CRM
              offers the customizability, feature depth, and product stability required to
              effectively manage a large-scale organization across all departments, markets,and
              geographic locations.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="error"
              size="large"
              component="a"
              href="/"
              sx={{ mb: 2 }}
            >
              Learn More
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={10} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={10} mb={8}>
              Our Clients
            </MKTypography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={4} lg={10}>
                <MKBox component="a" href="/" target="_blank">
                  <MKBox component="img" src={Logo1} width="100%" />
                </MKBox>
              </Grid>
              {/* <Grid item xs={4} lg={2}>
                <Tooltip title="Quickbooks">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="/"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={Logo2} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Sage">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="/"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={Logo3} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="TallyPrime">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="/"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={Logo4} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="ERPNext">
                  <MKBox component="a" href="/" target="_blank">
                    <MKBox component="img" src={Logo5} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Odoo">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="/"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={Logo6} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid> */}
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
