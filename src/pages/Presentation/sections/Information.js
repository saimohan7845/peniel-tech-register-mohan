import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Accounting - Inventory - Bookkeeping Management
                    <br />
                    and ERP Solution Provider
                  </>
                }
                description="Peniel Technology LLC is the best solution provider for ERP (Enterprise Resource Planning), 
                CRM (Customer Resource Management) and HCM (Human Capital Management) and Accounting Software in UAE."
              />
              <RotatingCardBack
                image={bgBack}
                title="Why Peniel Technology? With Expert Team"
                description="You can be stress-free since Peniel Technology LLC will take care of your business development 
                and management."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "meet our team",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Research Project"
                  description="The first step of the successful implementation of any software is analysis and planning."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Business Solutions"
                  description="Our dedicated team of well-qualified Customer Support Engineers, Technical Engineers, 
                  Developers, Designers, and Trainers"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Tax Accounting"
                  description="We provide VAT Compatible Accounting Software and our technical engineers are experts 
                  in effective implementation"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Cloud-based"
                  description="Our Cloud-based applications are highly configurable to the last extent with a profound understanding"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
