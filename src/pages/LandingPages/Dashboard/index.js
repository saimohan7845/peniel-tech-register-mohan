//import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
//import bgImage from "assets/clientimg/team.webp";

function Dashboard() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "/pages/get-started",
            label: "get started",
            color: "error",
          }}
        />
      </MKBox>
      {/* <Grid container alignItems="center" fullWidth> */}
      {/* <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={12}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        > */}
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt={{ xs: 20, sm: 18, md: 20 }}
        mb={{ xs: 20, sm: 18, md: 20 }}
        mx={3}
      >
        <MKBox
          variant="gradient"
          bgColor="error"
          coloredShadow="info"
          borderRadius="lg"
          p={2}
          mx={2}
          mt={-3}
        >
          <MKTypography variant="h3" color="white" textAlign="center">
            Dashboard
          </MKTypography>
        </MKBox>
        <MKBox p={3}>
          {/* <MKTypography variant="body2" color="text" mb={3}>
            For further questions, including partnership opportunities, please email
            hello@peniel-tech.com or contact using our contact form.
          </MKTypography> */}
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MKInput
                  variant="standard"
                  label="Full Name"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  type="email"
                  variant="standard"
                  label="Email"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  type="number"
                  variant="standard"
                  label="Mobile No"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  variant="standard"
                  label="What can we help you?"
                  //placeholder="Describe your problem in at least 250 characters"
                  InputLabelProps={{ shrink: true }}
                  multiline
                  fullWidth
                  rows={6}
                />
              </Grid>
            </Grid>
            <Grid container item justifyContent="space-between" xs={12} mt={5} mb={2}>
              <MKButton type="submit" variant="gradient" color="error">
                Back
              </MKButton>
              <MKButton type="submit" variant="gradient" color="error">
                Next
              </MKButton>
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Dashboard;