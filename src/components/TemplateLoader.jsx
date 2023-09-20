import "../styles/TemplateLoader.css"

export default function TemplateLoader({ onTemplateLoad, onClear, onPrint }) {
    return (
        <div className="template-loader">
            <button onClick={onClear} className="clear-resume">
                <i className="fa-solid fa-trash" />
                Clear Resume
            </button>

            <button onClick={onTemplateLoad} className="load-example">
                Load Example
            </button>

            <button onClick={onPrint} className="print-resume">
                <i className="fa-solid fa-print" />
                Print
            </button>

        </div>
    );
}