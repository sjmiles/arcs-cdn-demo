    window.demo = async function(urlMap, manifestPath, container) {
      //
      // create system objects
      //
      // renderer
      let slotComposer = new Arcs.SlotComposer(container, /* affordance */ "dom");
      // an Arc!
      let arc = Arcs.utils.createArc({id: 'demo', urlMap, slotComposer});
      // create a system loader
      // TODO(sjmiles): `pecFactory` can create loader objects (via worker-entry*.js) for the innerPEC,
      // but we have to create one by hand for manifest loading
      let loader = new Arcs.BrowserLoader(urlMap);

      //
      // configure application
      //
      // load manifest
      let manifest = await Arcs.Manifest.load(manifestPath, loader);
      // setup the database
      Arcs.utils.prepareDataContext(window.db, arc, manifest);
      // configure suggestions UI
      let ui = document.querySelector('suggestions-element');
      ui.arc = arc;
      ui.callback = () => {};
      // generate suggestions
      Arcs.utils.suggest(arc, ui, new Arcs.Planner(), manifest.recipes);
    };