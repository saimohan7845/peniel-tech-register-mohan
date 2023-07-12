import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Elate CRM"
                    description="Elatesoft is a highly reputed visionary in business solution with its sole focus providing a comprehensive and integrated software solution in Middle East."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Elate TMS"
                    description="Elatesoft is a highly reputed visionary in business solution with its sole focus providing a comprehensive and integrated software solution in Middle East."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Elate HRMS"
                    description="Elatesoft is a highly reputed visionary in business solution with its sole focus providing a comprehensive and integrated software solution in Middle East."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Cheque Printing"
                    description="Elatesoft is a highly reputed visionary in business solution with its sole focus providing a comprehensive and integrated software solution in Middle East."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="We Prepare Startups For Accelerators"
              description="As a pioneer IT solutions firm, we provide accounting, Trading, Invoicing, bookkeeping and management software solutions for all your business requirements. Additionally, we provide software customization, software development according to the necessities of our clients."
              action={{
                type: "internal",
                route: "/",
                color: "error",
                label: "see all features",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
