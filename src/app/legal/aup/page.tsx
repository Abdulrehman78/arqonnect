import { permanentRedirect } from "next/navigation";

/** Legacy /legal/aup URL → canonical Acceptable Use Policy. */
export default function LegalAupRedirectPage() {
  permanentRedirect("/legal/acceptable-use");
}
