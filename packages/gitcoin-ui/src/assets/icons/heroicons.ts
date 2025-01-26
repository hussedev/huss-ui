// Status Icons
import { InformationCircleIcon } from "@heroicons/react/outline";
import {
  BriefcaseIcon,
  CalendarIcon,
  CashIcon,
  CheckCircleIcon as CheckSolidIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  ClockIcon,
  CollectionIcon,
  DocumentDuplicateIcon,
  ExclamationCircleIcon,
  GlobeAltIcon as GlobeIcon,
  HomeIcon,
  LinkIcon,
  PencilIcon,
  QuestionMarkCircleIcon as SolidQuestionMarkCircleIcon,
  SparklesIcon,
  StarIcon,
  UsersIcon,
  UserGroupIcon,
  XCircleIcon as XSolidIcon,
  XIcon,
  PlusIcon,
} from "@heroicons/react/solid";

enum HeroiconsType {
  BRIEFCASE = "briefcase",
  CALENDAR = "calendar",
  CASH = "cash",
  CHECK = "check",
  CHEVRON_LEFT = "chevron-left",
  CLIPBOARD_LIST = "clipboardList",
  CLOCK = "clock",
  COLLECTION = "collection",
  DOCUMENT_DUPLICATE = "document-duplicate",
  EXCLAMATION_CIRCLE = "exclamation-circle",
  GLOBE = "globe",
  HOME = "home",
  INFORMATION_CIRCLE = "informationCircle",
  LINK = "link",
  PENCIL = "pencil",
  PLUS = "plus",
  SOLID_CHECK = "solid-check",
  SOLID_QUESTION_MARK_CIRCLE = "questionMarkCircle",
  SOLID_X = "solid-x",
  SPARKLES = "sparkles",
  STAR = "star",
  USERS = "users",
  USER_GROUP = "user-group",
  X = "x",
}

const heroiconsComponents: Record<HeroiconsType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  briefcase: BriefcaseIcon,
  calendar: CalendarIcon,
  cash: CashIcon,
  check: CheckIcon,
  "chevron-left": ChevronLeftIcon,
  clipboardList: ClipboardListIcon,
  clock: ClockIcon,
  collection: CollectionIcon,
  "document-duplicate": DocumentDuplicateIcon,
  "exclamation-circle": ExclamationCircleIcon,
  globe: GlobeIcon,
  informationCircle: InformationCircleIcon,
  home: HomeIcon,
  link: LinkIcon,
  pencil: PencilIcon,
  plus: PlusIcon,
  questionMarkCircle: SolidQuestionMarkCircleIcon,
  "solid-check": CheckSolidIcon,
  sparkles: SparklesIcon,
  star: StarIcon,
  users: UsersIcon,
  "user-group": UserGroupIcon,
  "solid-x": XSolidIcon,
  x: XIcon,
};

const heroIcons = Object.keys(heroiconsComponents).sort((a, b) =>
  a.localeCompare(b),
) as HeroiconsType[];

export {
  BriefcaseIcon,
  CalendarIcon,
  CheckSolidIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  ClockIcon,
  CollectionIcon,
  DocumentDuplicateIcon,
  ExclamationCircleIcon,
  GlobeIcon,
  HomeIcon,
  InformationCircleIcon,
  LinkIcon,
  PencilIcon,
  PlusIcon,
  SolidQuestionMarkCircleIcon,
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
  XSolidIcon,
  XIcon,
};

export { heroiconsComponents, HeroiconsType, heroIcons };