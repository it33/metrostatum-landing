const MESSAGE =
  "Test site  ·  Staging preview  ·  Not production  ·  Do not index  ·  For review only  ·  ";

export function StagingBanner() {
  return (
    <div className="staging-banner" role="status" aria-label="This is a test site on a staging area, not production.">
      <div className="staging-banner__track">
        <span>{MESSAGE.repeat(6)}</span>
        <span aria-hidden="true">{MESSAGE.repeat(6)}</span>
      </div>
    </div>
  );
}
