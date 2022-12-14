import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
  HiddenField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TaskForm = (props) => {
  const { loading, isAuthenticated, currentUser } = useAuth()
  const onSubmit = (data) => {
    props.onSave(data, props?.task?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.task?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <HiddenField
          name="user_id"
          defaultValue={currentUser.uid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        ></HiddenField>

        <FieldError name="user_id" className="rw-field-error" />

        <Label
          name="status_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status id
        </Label>

        <NumberField
          name="status_id"
          defaultValue={props.task?.status_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="status_id" className="rw-field-error" />

        <Label
          name="urgency"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Urgency
        </Label>

        <TextField
          name="urgency"
          defaultValue={props.task?.urgency}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="urgency" className="rw-field-error" />

        <Label
          name="priority"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Priority
        </Label>

        <NumberField
          name="priority"
          defaultValue={props.task?.priority}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="priority" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.task?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
