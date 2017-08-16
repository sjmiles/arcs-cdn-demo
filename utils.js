// ad-hoc (for now) utilities
let utils = {
  createUrlMap: cdnRoot => {
    return {
      // TODO(sjmiles): mapping root and dot-root allows browser-cdn-loader to replace right-hand
      // side with fully-qualified URL when loading from worker context
      '/': '/',
      './': './',
      'assets': `${cdnRoot}/assets`,
      // TODO(sjmiles): map must always contain (explicitly, no prefixing) a mapping for `worker-entry-cdn.js`
      'worker-entry-cdn.js': `${cdnRoot}/worker-entry-cdn.js`
    };
  },
  prepareDataContext: (db, arc, manifest) => {
    if (!db) return;
    let highlight = 'padding: 3px 4px; background: #444; color: #bada55; font-weight: bold;';
    // create views
    // TODO(sjmiles): empirically, views must exist before committing Entities (?)
    db.views && db.views.forEach(info => {
      let entity = manifest.findSchemaByName(info.type).entityClass();
      let view = arc.createView(entity.type.viewOf(), info.name);
      console.log(`created View: %c${info.name||'anon'}::${info.type}`, `${highlight} color: #ff8080;`);
      // commit entities
      if (info.model) {
        info.model.forEach(r => {
          view.store(new entity(r));
        });
        console.log(`committed Entities: %c${info.model.length}`, `${highlight} color: #ffff80;`);
      }
    });
  },
  suggest: async (arc, ui, planner, recipes) => {
    planner.init(arc, {arc, recipes});
    let suggestions = await planner.suggest(500);
    suggestions.forEach((suggestion, i) => ui.add(suggestion, i));
  }
};

// global module (for now)
window.utils = utils;