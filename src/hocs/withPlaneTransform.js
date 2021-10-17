function withPlaneTransform(component, mapAttrToGetter, mapAttrToSetter) {
  return function (props) {
    const planeHelper = props.planeHelper;
    
    const element = component(props);

    const getters = Object.keys(mapAttrToGetter || {});
    const getAttribute = element.getAttribute.bind(element);
    element.getAttribute = function (qualifiedName) {
      if (getters.includes(qualifiedName)) {
        const transform = mapAttrToGetter[qualifiedName];
        return transform(
          planeHelper,
          getAttribute(qualifiedName),
          element
        );
      } else {
        return getAttribute(qualifiedName);
      }
    }

    const setters = Object.keys(mapAttrToSetter || {});
    const setAttribute = element.setAttribute.bind(element);
    element.setAttribute = function (qualifiedName, value) {
      if (setters.includes(qualifiedName)) {
        const transform = mapAttrToSetter[qualifiedName];
        setAttribute(
          qualifiedName,
          transform(planeHelper, value, element)
        );
      } else {
        setAttribute(qualifiedName, value);
      }
    }

    return element;
  }
}

export default withPlaneTransform;
