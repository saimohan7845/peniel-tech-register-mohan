import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard image={image} name={name} pro={pro} height={220} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={2} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 2, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="What We Do"
            container
            sx={{ mb: 3 }}
          />
          <MKTypography variant="h2" fontWeight="bold" mb={3}>
            Your IT Partner
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={10}>
            We are the trustworthy suppliers of all sorts of accounting software in Dubai, UAE,
            Bahrain, Sharjah, Abu Dhabi and, all other Middle East. Our main objective is to
            organize, strategize and implement solutions to your business with Tally ERP 9, Intuit
            QuickBooks, Sage 50 US, Sage 50 UK, Sage 100, Sage 300, Elate CRM, Elate HRMS, and Elate
            POS, etc.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 10 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
