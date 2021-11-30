export class Project {
  private _name: string;
  private _type: string;
  private _languages: string;
  private _image: string;
  private _url: string;
  private _description: string;

  constructor(
    name: string,
    type: string,
    languages: string,
    image: string,
    url: string,
    description: string
  ) {
    (this._name = name),
      (this._type = type),
      (this._languages = languages),
      (this._image = image),
      (this._url = url),
      (this._description = description);
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter languages
   * @return {string}
   */
  public get languages(): string {
    return this._languages;
  }

  /**
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter languages
   * @param {string} value
   */
  public set languages(value: string) {
    this._languages = value;
  }

  /**
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }
}
