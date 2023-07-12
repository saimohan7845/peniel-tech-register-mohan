import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import DropdownAndDropup from "layouts/sections/elements/dropdowns/components/DropdownAndDropup";
import dropdownAndDropupCode from "layouts/sections/elements/dropdowns/components/DropdownAndDropup/code";

function Dropdowns() {
  return (
    <BaseLayout
      title="Penieltech Dropdowns"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/dropdowns" },
        { label: "Penieltech Dropdowns" },
      ]}
    >
      <View title="Penieltech Dropdown and Dropup" code={dropdownAndDropupCode}>
        <DropdownAndDropup />
      </View>
    </BaseLayout>
  );
}

export default Dropdowns;
