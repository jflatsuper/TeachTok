/**
 * The purpose of this folder is to enable support for multiple langauges
 * This can be achieved using i18n if neccessary
 */
import { DEFAULT } from "./constant";
import en from "./en.json";

const language = {
  en: en,
};

export default language[DEFAULT] ;
