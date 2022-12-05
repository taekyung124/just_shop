from matplotlib._api import classproperty
from .backend_managers import ToolManager
from .texmanager import TexManager
from .widgets import Cursor, LockDraw
from typing import Any, Callable, Literal
from ._typing import *
from .transforms import Affine2DBase, Bbox, Transform, TransformedPath
from .text import Text
from .path import Path
from ._enums import CapStyle, JoinStyle
from .backend_tools import Cursors
from .font_manager import FontProperties
from .figure import Figure
from .axes import Axes
from .artist import Artist

from enum import Enum, IntEnum
from . import backend_tools as tools

def register_backend(format: str, backend, description: str = ...): ...
def get_registered_canvas_class(format): ...

class RendererBase:
    def __init__(self) -> None: ...
    def open_group(self, s, gid=...)->None: ...
    def close_group(self, s)-> None: ...
    def draw_path(self, gc, path: Path, transform: Transform, rgbFace=...)-> None: ...
    def draw_markers(
        self,
        gc: GraphicsContextBase,
        marker_path: Path,
        marker_trans: Transform,
        path: Path,
        trans: Transform,
        rgbFace=...,
    )-> None: ...
    def draw_path_collection(
        self,
        gc: GraphicsContextBase,
        master_transform: Transform,
        paths,
        all_transforms,
        offsets,
        offsetTrans,
        facecolors,
        edgecolors,
        linewidths,
        linestyles,
        antialiaseds,
        urls,
        offset_position,
    )-> None: ...
    def draw_quad_mesh(
        self,
        gc: GraphicsContextBase,
        master_transform: Transform,
        meshWidth,
        meshHeight,
        coordinates,
        offsets,
        offsetTrans,
        facecolors,
        antialiased,
        edgecolors,
    )-> None: ...
    def draw_gouraud_triangle(
        self,
        gc: GraphicsContextBase,
        points: ArrayLike,
        colors: ArrayLike,
        transform: Transform,
    )-> None: ...
    def draw_gouraud_triangles(
        self,
        gc: GraphicsContextBase,
        triangles_array: ArrayLike,
        colors_array: ArrayLike,
        transform: Transform,
    )-> None: ...
    def get_image_magnification(self)-> float: ...
    def draw_image(
        self,
        gc: GraphicsContextBase,
        x: Scalar,
        y: Scalar,
        im: ArrayLike,
        transform: Affine2DBase = ...,
    )-> None: ...
    def option_image_nocomposite(self) -> bool: ...
    def option_scale_image(self) -> bool: ...
    def draw_tex(self, gc: GraphicsContextBase, x, y, s, prop, angle, *, mtext=...)-> None: ...
    def draw_text(
        self,
        gc: GraphicsContextBase,
        x: float,
        y: float,
        s: str,
        prop: FontProperties,
        angle: float,
        ismath: bool = ...,
        mtext: Text = ...,
    )-> None: ...
    def get_text_width_height_descent(
        self, s: str, prop: FontProperties, ismath: bool
    )-> tuple[float, float, float]: ...
    def flipy(self) -> bool: ...
    def get_canvas_width_height(self) -> tuple[float, float]: ...
    def get_texmanager(self) -> TexManager: ...
    def new_gc(self) -> GraphicsContextBase: ...
    def points_to_pixels(self, points: float | ArrayLike): ...
    def start_rasterizing(self) -> None: ...
    def stop_rasterizing(self) -> None: ...
    def start_filter(self) -> bool: ...
    def stop_filter(self, filter_func)-> None: ...

class GraphicsContextBase:
    def __init__(self) -> None: ...
    def copy_properties(self, gc: GraphicsContextBase)-> None: ...
    def restore(self) -> None: ...
    def get_alpha(self) -> float: ...
    def get_antialiased(self) -> bool: ...
    def get_capstyle(self) -> CapStyle: ...
    def get_clip_rectangle(self) -> Bbox: ...
    def get_clip_path(self) -> tuple[Path, Transform]: ...
    def get_dashes(self) -> tuple: ...
    def get_forced_alpha(self) -> bool: ...
    def get_joinstyle(self) -> JoinStyle: ...
    def get_linewidth(self) -> float: ...
    def get_rgb(self) -> tuple[float, ...]: ...
    def get_url(self) -> str | None: ...
    def get_gid(self)-> int: ...
    def get_snap(self) -> bool | None: ...
    def set_alpha(self, alpha: float)-> None: ...
    def set_antialiased(self, b: bool)-> None: ...
    def set_capstyle(self, cs: CapStyle | Literal["butt", "projecting", "round"])-> None: ...
    def set_clip_rectangle(self, rectangle: Bbox)-> None: ...
    def set_clip_path(self, path: TransformedPath | None)-> None: ...
    def set_dashes(self, dash_offset: float, dash_list: ArrayLike | None)-> None: ...
    def set_foreground(self, fg: Color, isRGBA: bool = ...) -> None: ...
    def set_joinstyle(
        self, js: JoinStyle | Literal["miter", "round", "bevel"]
    ) -> None: ...
    def set_linewidth(self, w) -> None: ...
    def set_url(self, url: str) -> None: ...
    def set_gid(self, id) -> None: ...
    def set_snap(self, snap: bool | None) -> None: ...
    def set_hatch(self, hatch) -> None: ...
    def get_hatch(self): ...
    def get_hatch_path(self, density=...) -> Path: ...
    def get_hatch_color(self)-> Color: ...
    def set_hatch_color(self, hatch_color: Color): ...
    def get_hatch_linewidth(self)-> float: ...
    def get_sketch_params(self) -> tuple[float, float, float] | None: ...
    def set_sketch_params(
        self, scale: float = ..., length: float = ..., randomness: float = ...
    ) -> None: ...

class TimerBase:
    def __init__(
        self, interval: int = 1000, callbacks: list[tuple[Callable, tuple, dict]] = ...
    ) -> None: ...
    def __del__(self) -> None: ...
    def start(self, interval: int = ...) -> None: ...
    def stop(self) -> None: ...
    @property
    def interval(self) -> int: ...
    @interval.setter
    def interval(self, interval: int)-> None: ...
    @property
    def single_shot(self) -> bool: ...
    @single_shot.setter
    def single_shot(self, ss: bool)-> None: ...
    def add_callback(self, func: Callable, *args, **kwargs) -> None: ...
    def remove_callback(self, func: Callable, *args, **kwargs) -> None: ...

class Event:

    name: str
    canvas: FigureCanvasBase
    guiEvent: Any

    def __init__(self, name: str, canvas: FigureCanvasBase, guiEvent=...) -> None: ...

class DrawEvent(Event):

    renderer: RendererBase
    def __init__(
        self, name: str, canvas: FigureCanvasBase, renderer: RendererBase
    ) -> None: ...

class ResizeEvent(Event):

    width: int
    height: int

    def __init__(self, name: str, canvas: FigureCanvasBase) -> None: ...

class CloseEvent(Event): ...

class LocationEvent(Event):

    x: int | None
    y: int | None
    inaxes: Axes | None
    xdata: float | None
    ydata: float | None

    lastevent = ...
    def __init__(
        self, name: str, canvas: FigureCanvasBase, x: int, y: int, guiEvent=...
    ) -> None: ...

class MouseButton(IntEnum):
    LEFT = 1
    MIDDLE = 2
    RIGHT = 3
    BACK = 8
    FORWARD = 9

class MouseEvent(LocationEvent):
    button: None | MouseButton | Literal["up", "down"]
    key: None | str
    step: float
    dblclick: bool

    def __init__(
        self,
        name: str,
        canvas: FigureCanvasBase,
        x: int,
        y: int,
        button: None | MouseButton | Literal["up", "down"] = ...,
        key: str | None = ...,
        step=...,
        dblclick: bool = ...,
        guiEvent=...,
    ) -> None: ...
    def __str__(self) -> str: ...

class PickEvent(Event):
    mouseevent: MouseEvent
    artist: Artist

    def __init__(
        self,
        name: str,
        canvas: FigureCanvasBase,
        mouseevent: MouseEvent,
        artist: Artist,
        guiEvent=...,
        **kwargs
    ) -> None: ...

class KeyEvent(LocationEvent):
    key: None | str

    def __init__(
        self,
        name: str,
        canvas: FigureCanvasBase,
        key: None | str,
        x: int = ...,
        y: int = ...,
        guiEvent=...,
    ) -> None: ...

class FigureCanvasBase:

    required_interactive_framework = ...
    manager_class: classproperty = ...
    events: list[str] = ...
    fixed_dpi = ...
    filetypes: dict[str, str] = ...
    widgetlock: LockDraw = ...

    @classmethod
    def supports_blit(cls)-> bool: ...
    def __init__(self, figure: Figure = ...) -> None: ...

    callbacks: property = ...
    button_pick_id: property = ...
    scroll_pick_id: property = ...
    @classmethod
    def new_manager(cls, figure: Figure, num) -> FigureManagerBase: ...
    def is_saving(self) -> bool: ...
    def pick(self, mouseevent: MouseEvent)-> None: ...
    def blit(self, bbox=...) -> None: ...
    def resize(self, w: int, h: int) -> None: ...
    def draw_event(self, renderer: RendererBase) -> None: ...
    def resize_event(self) -> None: ...
    def close_event(self, guiEvent=...) -> None: ...
    def key_press_event(self, key: str | None, guiEvent=...) -> None: ...
    def key_release_event(self, key: str | None, guiEvent=...) -> None: ...
    def pick_event(self, mouseevent: MouseEvent, artist: Artist, **kwargs) -> None: ...
    def scroll_event(self, x: float, y: float, step, guiEvent=...) -> None: ...
    def button_press_event(
        self, x: float, y: float, button, dblclick: bool = ..., guiEvent=...
    ) -> None: ...
    def button_release_event(
        self, x: float, y: float, button, guiEvent=...
    ) -> None: ...
    def motion_notify_event(self, x: float, y: float, guiEvent=...)-> None: ...
    def leave_notify_event(self, guiEvent=...) -> None: ...
    def enter_notify_event(
        self, guiEvent=..., xy: tuple[float, float] = ...
    ) -> None: ...
    def inaxes(self, xy: tuple[float, float]) -> Axes | None: ...
    def grab_mouse(self, ax: Axes) -> None: ...
    def release_mouse(self, ax: Axes) -> None: ...
    def set_cursor(self, cursor: Cursors) -> None: ...
    def draw(self, *args, **kwargs) -> None: ...
    def draw_idle(self, *args, **kwargs) -> None: ...
    @property
    def device_pixel_ratio(self) -> float: ...
    def get_width_height(self, *, physical: bool = ...) -> tuple[int, int]: ...
    @classmethod
    def get_supported_filetypes(cls) -> dict: ...
    @classmethod
    def get_supported_filetypes_grouped(cls) -> dict[str, list[str]]: ...
    def print_figure(
        self,
        filename: str | PathLike | FileLike,
        dpi: float = ...,
        facecolor: Color | Literal["auto"] = ...,
        edgecolor: Color | Literal["auto"] = ...,
        orientation: Literal["landscape", "portrait"] = ...,
        format: str = ...,
        *,
        bbox_inches: Literal["tight"] | Bbox = ...,
        pad_inches: float = ...,
        bbox_extra_artists: list[Artist] = ...,
        backend: str = ...,
        **kwargs
    ) -> None: ...
    @classmethod
    def get_default_filetype(cls) -> str: ...
    def get_default_filename(self) -> str: ...
    def switch_backends(self, FigureCanvasClass) -> None: ...
    def mpl_connect(self, s: str, func: Callable)-> int: ...
    def mpl_disconnect(self, cid: int): ...
    _timer_cls = TimerBase
    def new_timer(
        self, interval: int = ..., callbacks: list[tuple[Callable, tuple, dict]] = ...
    )-> _timer_cls: ...
    def flush_events(self) -> None: ...
    def start_event_loop(self, timeout: int = ...) -> None: ...
    def stop_event_loop(self) -> None: ...

def key_press_handler(
    event: KeyEvent, canvas: FigureCanvasBase = ..., toolbar: NavigationToolbar2 = ...
) -> None: ...
def button_press_handler(
    event, canvas: FigureCanvasBase = ..., toolbar=...
) -> None: ...

class NonGuiException(Exception): ...

class FigureManagerBase:

    canvas: FigureCanvasBase
    num: int | str
    key_press_handler_id: int
    button_press_handler_id: int

    def __init__(self, canvas: FigureCanvasBase, num: int | str) -> None: ...
    @classmethod
    def create_with_canvas(cls, canvas_class, figure: Figure, num: int | str)-> FigureManagerBase: ...
    def show(self) -> None: ...
    def destroy(self) -> None: ...
    def full_screen_toggle(self) -> None: ...
    def resize(self, w: int, h: int) -> None: ...
    def get_window_title(self) -> None: ...
    def set_window_title(self, title: str) -> None: ...

cursors = tools.cursors

class _Mode(str, Enum):
    NONE: _Mode
    PAN: _Mode
    ZOOM: _Mode
    def __str__(self) -> str: ...

class NavigationToolbar2:

    toolitems = ...
    def __init__(self, canvas: FigureCanvasBase) -> None: ...
    def set_message(self, s: str)-> None: ...
    def draw_rubberband(self, event, x0, y0, x1, y1) -> None: ...
    def remove_rubberband(self) -> None: ...
    def home(self, *args) -> None: ...
    def back(self, *args) -> None: ...
    def forward(self, *args) -> None: ...
    def mouse_move(self, event: MouseEvent) -> None: ...
    def pan(self, *args) -> None: ...
    def press_pan(self, event: MouseEvent) -> None: ...
    def drag_pan(self, event: MouseEvent) -> None: ...
    def release_pan(self, event: MouseEvent) -> None: ...
    def zoom(self, *args)-> None: ...
    def press_zoom(self, event: MouseEvent) -> None: ...
    def drag_zoom(self, event: MouseEvent) -> None: ...
    def release_zoom(self, event: MouseEvent) -> None: ...
    def push_current(self) -> None: ...
    def configure_subplots(self, *args) -> None: ...
    def save_figure(self, *args) -> None: ...
    def set_cursor(self, cursor: Cursor) -> None: ...
    def update(self) -> None: ...
    def set_history_buttons(self) -> None: ...

class ToolContainerBase:

    toolmanager: ToolManager

    def __init__(self, toolmanager: ToolManager) -> None: ...
    def add_tool(self, tool: ToolManager, group: str, position: int = ...) -> None: ...
    def trigger_tool(self, name: str) -> None: ...
    def add_toolitem(
        self,
        name: str,
        group: str,
        position: int,
        image: str,
        description: str,
        toggle: bool,
    ) -> None: ...
    def toggle_toolitem(self, name: str, toggled: bool) -> None: ...
    def remove_toolitem(self, name: str) -> None: ...
    def set_message(self, s: str) -> None: ...

class _Backend:
    backend_version: str = ...
    FigureCanvas = FigureCanvasBase
    FigureManager = FigureManagerBase
    mainloop = ...
    @classmethod
    def new_figure_manager(cls, num, *args, **kwargs) -> FigureManagerBase: ...
    @classmethod
    def new_figure_manager_given_figure(cls, num, figure) -> FigureManagerBase: ...
    @classmethod
    def draw_if_interactive(cls) -> None: ...
    @classmethod
    def show(cls, *, block: bool | None = ...) -> None: ...
    @classmethod
    def export(cls) -> None: ...

class ShowBase(_Backend):
    def __call__(self, block: bool | None = ...) -> None: ...
