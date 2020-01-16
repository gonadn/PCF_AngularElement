import {IInputs, IOutputs} from "./generated/ManifestTypes";
import './../PCFAngulaElement/dist/PCFAngulaElement/bundle';

export class PCFAngularElementComponent implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _container: HTMLDivElement;
	private _htmlElement: HTMLElement;
	private _context: ComponentFramework.Context<IInputs>;
	private _notifyOutputChanged: () => void;

	constructor() {}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		this._context = context;
		this._container = container;
		this._notifyOutputChanged = notifyOutputChanged;

		//console.log(this._htmlElement)
		this._htmlElement = document.createElement("app-pcf-component");
		//this._container.appendChild(this._htmlElement);

		//Associate controls to container
		container.appendChild(this._htmlElement);	
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	public getOutputs(): IOutputs
	{
		return {};
	}

	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}