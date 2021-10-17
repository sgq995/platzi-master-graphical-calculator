import { flattenDeep, isArray, isNumber, isString } from "lodash";

/**
 * 
 * @param {HTMLElement} element 
 * @param {HTMLElement} container 
 * @returns 
 */
export function render(element, container) {
  if (isArray(element)) {
    flattenDeep(element)
      .forEach(child => {
        if (child instanceof Node) {
          container.appendChild(child)
        }
      });
  } else if (element instanceof Node) {
    container.appendChild(element);
  } else if (isString(element) || isNumber(element)) {
    container.textContent = element;
  }
}

/**
 * 
 * @param {SVGElement} element 
 * @param {SVGSVGElement} container 
 */
export function renderSVG(element, container) {
  if (isArray(element)) {
    flattenDeep(element)
      .forEach(child => {
        if (child instanceof SVGElement) {
          container.appendChild(child)
        }
      });
  } else if (element instanceof SVGElement) {
    container.appendChild(element);
  }
}
