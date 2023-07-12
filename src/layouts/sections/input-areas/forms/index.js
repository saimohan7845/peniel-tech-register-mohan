import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
import formSimpleCode from "layouts/sections/input-areas/forms/components/FormSimple/code";

function Forms() {
  return (
    <BaseLayout
      title="Contact Us"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/forms" },
        { label: "Contact Us" },
      ]}
    >
      <View title="Contact Us" code={formSimpleCode}>
        <FormSimple />
      </View>
    </BaseLayout>
  );
}

export default Forms;
