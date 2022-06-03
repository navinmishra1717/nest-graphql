export abstract class BaseRepository<I> {
  protected model: any;
  constructor(model: any) {
    this.model = model;
  }
  public getAll(): Promise<I[]> {
    return this.model.findAll();
  }

  public get(id: string): Promise<I> {
    return this.model.findById(id);
  }

  public create(data: I): Promise<I> {
    console.log(data, 'datatatata');
    // return this.model.create(data);
    return Promise.resolve(data);
  }

  public update(id: string, data: I) {
    return this.model.update(data, { where: { id } });
  }
}
