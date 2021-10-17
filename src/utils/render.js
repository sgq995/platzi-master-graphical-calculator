import { isArray, isNumber, isString } from "lodash";

/**
 * 
 * @param {HTMLElement} element 
 * @param {HTMLElement} container 
 * @returns 
 */
export function render(element, container) {
  if (isArray(element)) {
    element.forEach(child => container.appendChild(child));
  } else if (element instanceof HTMLElement) {
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
    element.forEach(child => container.appendChild(child));
  } else if (element instanceof SVGElement) {
    container.appendChild(element);
  }
}
