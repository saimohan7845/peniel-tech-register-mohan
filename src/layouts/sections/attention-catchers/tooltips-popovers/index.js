import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import Popovers from "layouts/sections/attention-catchers/tooltips-popovers/components/Popovers";
import Tooltips from "layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips";
import popoversCode from "layouts/sections/attention-catchers/tooltips-popovers/components/Popovers/code";
import tooltipsCode from "layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips/code";

function TooltipsPopovers() {
  return (
    <BaseLayout
      title="Penieltech Tooltip & Popovers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/tooltips-popovers" },
        { label: "Penieltech Tooltip & Popovers" },
      ]}
    >
      <View title=" Penieltech Popovers" code={popoversCode}>
        <Popovers />
      </View>
      <View title=" Penieltech Tooltips" code={tooltipsCode}>
        <Tooltips />
      </View>
    </BaseLayout>
  );
}

export default TooltipsPopovers;
