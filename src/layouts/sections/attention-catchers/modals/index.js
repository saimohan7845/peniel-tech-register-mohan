import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import SimpleModal from "layouts/sections/attention-catchers/modals/components/SimpleModal";
import simpleModalCode from "layouts/sections/attention-catchers/modals/components/SimpleModal/code";

function Modals() {
  return (
    <BaseLayout
      title="Penieltech Modal"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/modals" },
        { label: "Penieltech Modal" },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
