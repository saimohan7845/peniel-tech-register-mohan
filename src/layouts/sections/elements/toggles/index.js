import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import Toggle from "layouts/sections/elements/toggles/components/Toggle";
import ToggleContext from "layouts/sections/elements/toggles/components/ToggleContext";
import toggleCode from "layouts/sections/elements/toggles/components/Toggle/code";
import toggleContextCode from "layouts/sections/elements/toggles/components/ToggleContext/code";

function Toggles() {
  return (
    <BaseLayout
      title="Penieltech Toggles"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/toggles" },
        { label: "Penieltech Toggles" },
      ]}
    >
      <View title="Penieltech Toggle" code={toggleCode}>
        <Toggle />
      </View>
      <View title="Penieltech Toggle context" code={toggleContextCode}>
        <ToggleContext />
      </View>
    </BaseLayout>
  );
}

export default Toggles;
