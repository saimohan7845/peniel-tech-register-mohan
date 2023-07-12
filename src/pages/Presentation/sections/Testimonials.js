import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

import Logo1 from "assets/clientimg/compnay-logo-1.webp";
import Logo2 from "assets/clientimg/compnay-logo-2.webp";
import Logo3 from "assets/clientimg/compnay-logo-3.webp";
import Logo4 from "assets/clientimg/compnay-logo-4.webp";
import Logo5 from "assets/clientimg/compnay-logo-5.webp";
import Logo6 from "assets/clientimg/compnay-logo-6.webp";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" mb={2}>
            We Are Very Proud
          </MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            270,000+ Flourishing businesses in Dubai itself
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500+ companies, startups, universities and governmental institutions love
            Penieltech products.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="V Mohan"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently. I found solution to all my design needs from Penieltech."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Mohan Venudass"
              date="1 week ago"
              review="I found solution to all my design needs from Penieltech. Helped me cut the time to set up a site. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Mohan V"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 14 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={Logo1} alt="Elate" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={Logo2} alt="Quickbooks" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={Logo3} alt="Sage" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={Logo4} alt="TallyPrime" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={Logo5} alt="ERPNext" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={Logo6} alt="Odoo" width="100%" opacity={0.6} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
