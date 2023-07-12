import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={12000}
              suffix="+"
              title="Customers"
              description="Elate CRM, is designed for businesses of all sizes with an easy-to-use user interface. 
              It is very easy to use and includes key features like lead generation, contact and opportunity 
              management and reporting."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={800}
              suffix="+"
              title="Apps"
              description="Penieltech CRM works seamlessly with your favorite apps–or
              find the right app for your needs at Penieltech Marketplace."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={13}
              suffix="+"
              title="Year of Experience"
              description="As a pioneer IT solutions firm, we provide accounting, Trading, Invoicing, 
              bookkeeping and management software solutions for all your business requirements. 
              Additionally, we provide software customization, software development according to 
              the necessities of our clients."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
